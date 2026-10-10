const getCsrfToken = (): string | null => {
    const cookies = document.cookie.split("; ");

    const csrfCookie = cookies.find(cookie =>
        cookie.startsWith("csrfToken=")
    );

    return csrfCookie
        ? decodeURIComponent(csrfCookie.split("=")[1])
        : null;
};


export default {
    getCsrfToken
}

