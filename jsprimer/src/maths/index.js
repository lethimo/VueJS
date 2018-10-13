import addition from "./sum";
export function mean(values) {
    return addition(values) / values.length;
}

export { addition };
export * from "./operation";