const genericMask = (mask: string, val: string): string => {
    if (!val || val === '') {
        return '';
    }
    if (!mask || mask === '') {
        return val;
    }
    switch (mask.charAt(0)) {
        case '.':
        case '#':
            return val.charAt(0) + genericMask(mask.substring(1), val.substring(1));
        default:
            return mask.charAt(0) + genericMask(mask.substring(1), val);
    }
}

export {genericMask};