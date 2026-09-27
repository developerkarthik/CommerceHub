import { useState, type SubmitEvent } from "react";
import auth from "../../api/auth";
import { useNavigate } from "react-router";
import { useAuth } from "./context/AuthProvider";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const [errors, setErrors] = useState<{
        username?: string,
        password?:string 
    }>({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();

        const newErrors: typeof errors = {};
        if(!username.trim()){
            newErrors.username = "Username is required";
        }

        if(!password){
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if(Object.keys(newErrors).length > 0){
            return;
        }
        setIsSubmitting(true);
        try{    
            
            await login(username, password);

            navigate('/', { replace: true});

        }catch(error){
            console.log(errors);
        }finally{
            setIsSubmitting(false);
        }

    }
    return (
  <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
    <section className="w-full max-w-md">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            CommerceHub
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Business Operations Portal
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Sign in
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Enter your credentials to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700"
            >
              Email or Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              aria-invalid={Boolean(errors.username)}
              aria-describedby={
                errors.username ? "username-error" : undefined
              }
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {errors.username && (
              <p
                id="username-error"
                className="mt-1 text-sm text-red-600"
              >
                {errors.username}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "password-error" : undefined
              }
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {errors.password && (
              <p
                id="password-error"
                className="mt-1 text-sm text-red-600"
              >
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  </main>
);
}

export default Login;