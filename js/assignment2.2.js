function numbering(x) {
    for (let i = 1; i <= x; i++) {
        // console.log(x);
        let row = '';
        for (let y = 1; y <= i; y++) {
            row += y;
        } console.log(row);
    }

} numbering(10)