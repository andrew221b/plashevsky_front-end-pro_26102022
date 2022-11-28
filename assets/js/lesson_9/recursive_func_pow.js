const powNumber = (num, degree) => {
    let result

    if (degree === 0) {
        return 1
    }

    if (degree > 0) {
        result = num * powNumber(num, degree - 1)
    } else {
        result = 1 / num * powNumber(num, degree + 1)
    }

    /**
     * "powNumber(num, degree + 1) / num" also works for negative degree.
     *  Dk if any of them more preferable to use.
     * */ 
    
    return result
}

console.log(powNumber(2, 5))

