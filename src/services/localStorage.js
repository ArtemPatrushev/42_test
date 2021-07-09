export const fields = {
    token: 'test_app_token',
};

export const storage = {
    save: (item, fieldName) => {
        localStorage.setItem(fieldName, JSON.stringify(item));
    },
    load: (fieldName) => {
        const item = localStorage.getItem(fieldName);
        return item ? JSON.parse(item) : null;
    },
    remove: (fieldName) => {
        localStorage.removeItem(fieldName);
    },
}
