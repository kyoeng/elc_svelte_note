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
        setState: (key: "allowed" | "blocked" | "error"): void => set(key)
    }
}
export const isAllowedUserStore = createIsAllowedUserStore();




/**
 * 사용중인 회사명을 저장할 스토어
 */
function createCompanyStore() {
    const {subscribe, set} = writable("");

    return {
        subscribe,
        setCompany: (company: string) => set(company)
    }
}
export const companyStore = createCompanyStore();




export const BE_SERVER = "http://localhost:8888/";