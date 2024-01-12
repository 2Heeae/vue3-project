import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './updateModal.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'modal-wrapper'?: boolean; } &
{ 'modal'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h5; __VLS_intrinsicElements.h5;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.input;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("modal-wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("modal-wrapper"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("modal"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("modal"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("modal-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("modal-content"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("modal-header"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("modal-header"), style: ({}), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["h5"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("modal-title"), id: ("exampleModalLabel"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("modal-title"), id: ("exampleModalLabel"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["button"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, type: ("button"), class: ("close"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, type: ("button"), class: ("close"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["span"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_32>).onClick) };
__VLS_35 = { click: (__VLS_ctx.onClose) };
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_36 = __VLS_intrinsicElements["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: ("modal-body"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("modal-body"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
{
const __VLS_41 = __VLS_intrinsicElements["input"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{ onChange: {} as any, }, class: ("form-control"), type: ("text"), value: ((__VLS_ctx.todoSubject)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, class: ("form-control"), type: ("text"), value: ((__VLS_ctx.todoSubject)), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
let __VLS_46 = { 'change': __VLS_pickEvent(__VLS_45['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_42, typeof __VLS_43>).onChange) };
__VLS_46 = {
change: $event => {
__VLS_ctx.changeText(__VLS_ctx.todoSubject);
// @ts-ignore
[onClose, todoSubject, todoSubject, changeText, todoSubject,];
}
};
}
(__VLS_39.slots!).default;
}
{
const __VLS_47 = __VLS_intrinsicElements["div"];
const __VLS_48 = __VLS_elementAsFunctionalComponent(__VLS_47);
const __VLS_49 = __VLS_48({ ...{}, class: ("modal-footer"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_49> & Record<string, unknown>) => void)({ ...{}, class: ("modal-footer"), style: ({}), });
const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49)!;
let __VLS_51!: __VLS_NormalizeEmits<typeof __VLS_50.emit>;
{
const __VLS_52 = __VLS_intrinsicElements["button"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
const __VLS_54 = __VLS_53({ ...{ onClick: {} as any, }, type: ("button"), class: ("btn btn-secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("btn btn-secondary"), });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>;
let __VLS_57 = { 'click': __VLS_pickEvent(__VLS_56['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_53, typeof __VLS_54>).onClick) };
__VLS_57 = { click: (__VLS_ctx.onClose) };
(__VLS_55.slots!).default;
}
{
const __VLS_58 = __VLS_intrinsicElements["button"];
const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
const __VLS_60 = __VLS_59({ ...{ onClick: {} as any, }, type: ("button"), class: ("btn btn-primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_58, typeof __VLS_60> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("btn btn-primary"), });
const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60)!;
let __VLS_62!: __VLS_NormalizeEmits<typeof __VLS_61.emit>;
let __VLS_63 = { 'click': __VLS_pickEvent(__VLS_62['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_59, typeof __VLS_60>).onClick) };
__VLS_63 = {
click: $event => {
__VLS_ctx.onUpdate(__VLS_ctx.editSubject);
// @ts-ignore
[onClose, onUpdate, editSubject,];
}
};
(__VLS_61.slots!).default;
}
(__VLS_50.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["modal-wrapper"];
__VLS_styleScopedClasses["modal"];
__VLS_styleScopedClasses["modal-content"];
__VLS_styleScopedClasses["modal-header"];
__VLS_styleScopedClasses["modal-title"];
__VLS_styleScopedClasses["close"];
__VLS_styleScopedClasses["modal-body"];
__VLS_styleScopedClasses["form-control"];
__VLS_styleScopedClasses["modal-footer"];
__VLS_styleScopedClasses["btn"];
__VLS_styleScopedClasses["btn-secondary"];
__VLS_styleScopedClasses["btn"];
__VLS_styleScopedClasses["btn-primary"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
