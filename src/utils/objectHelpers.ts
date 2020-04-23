

export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: any) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return { ...item, ...newObjProps }
        }
        return item;
    })
}