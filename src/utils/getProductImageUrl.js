export function getProductImageUrl(product, fallbackUrl = "") {
    const apiURL = (import.meta.env.VITE_API_URL || "https://apiburger.jardsonflorentino.com.br").replace(/\/$/, "");

    if (product?.url) {
        if (product.url.startsWith("http") || product.url.startsWith("data:")) {
            return product.url;
        }

        return `${apiURL}/${product.url.replace(/^\//, "")}`;
    }

    if (product?.path) {
        return `${apiURL}/product-file/${product.path.replace(/^\//, "")}`;
    }

    return fallbackUrl;
}
