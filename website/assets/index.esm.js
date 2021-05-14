import {
    getCurrentInstance as t,
    defineComponent as n,
    computed as e,
    openBlock as o,
    createBlock as r,
    renderSlot as s
} from "vue";

var u = n({
    name: "SButton", props: {type: String, size: String}, setup(n, o) {
        const r = function () {
            const n = t();
            return "$SEEN" in n.proxy ? n.proxy.$SEEN : {}
        }();
        return {buttonSize: e((() => n.size || r.size || "default"))}
    }
});
u.render = function (t, n, e, u, a, i) {
    return o(), r("button", {class: ["btn", ["btn-" + t.buttonSize, t.type ? "btn-" + t.type : ""]]}, [s(t.$slots, "default")], 2)
}, u.__file = "packages/button/src/button.vue", u.install = t => {
    t.component(u.name, u)
};
const a = u, i = [a], p = {size: "default", zIndex: 2e3};
var c = {
    install: (t, n) => {
        const e = Object.assign(p, n);
        t.config.globalProperties.$SEEN = e, i.forEach((n => {
            t.component(n.name, n)
        }))
    }
};
export default c;
export {a as SButton};
