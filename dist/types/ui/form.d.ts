/** @jsxImportSource hono/jsx */
export declare const FORM_ONSUBMIT = "this.querySelectorAll('input:not([type=hidden])').forEach(el => el.readOnly = true); this.querySelectorAll('button').forEach(el => el.disabled = true)";
export declare function FormAlert(props: {
    message?: string;
    color?: "danger" | "success";
}): import("hono/jsx/jsx-dev-runtime").JSX.Element;
//# sourceMappingURL=form.d.ts.map