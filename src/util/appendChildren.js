export default function appendChildren(container, children) {
    children.forEach((child) => {
        container.appendChild(child);
    });
}