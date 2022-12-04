export function overflow(e: HTMLElement) {
    return e.scrollWidth > e.offsetWidth || e.scrollHeight > e.offsetHeight;
}
