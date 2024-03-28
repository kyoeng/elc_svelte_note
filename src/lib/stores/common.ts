import { writable } from "svelte/store";





/**
 * 스크린모드(light, dark)에 대한 스토어
 */
function createScreenModeStore() {
    const {subscribe, set} = writable("dark");

    return {
        subscribe,
        changeMode: (mode: "light" | "dark"): void => set(mode)
    }
}
export const screenModeStore = createScreenModeStore();




/**
 * 유저의 허용여부에 대한 스토어
 */
function createIsAllowedUserStore() {
    const {subscribe, set} = writable("checking");

    return {
        subscribe,
        setState: (key: "allowed" | "blocked"): void => set(key)
    }
}
export const isAllowedUserStore = createIsAllowedUserStore();