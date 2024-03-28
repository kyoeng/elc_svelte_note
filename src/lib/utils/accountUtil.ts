export function checkInputValue(el: HTMLInputElement, type: string): {status: boolean, comment: string | undefined} {
    const value = el.value;
    let pattern;
    let comment;

    switch (type) {
        case "name":
            return {status: true, comment: undefined};
    
        case "id":
            return {status: true, comment: undefined};
    
        case "number":
            pattern = /^\d*$/g;
            comment = "** 숫자만 입력 가능합니다.";
            break;
    
        case "password":
            pattern = /^(?=.*[a-zA-Z0-9])(?=.*[\W_]).+$/;
            comment = "** 영문, 숫자, 특수문자로 이루어져야 하고 최소 8자 이상이어야 합니다.";
            break;
    
        default:
            return {status: true, comment: undefined};
    }


    if (pattern.test(value)) return {status: true, comment: undefined};
    else return {status: true, comment};
}