export class DateFormat {
    formatDate(date: Date, type) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        switch (type) {
            case 'yyyy/MM/dd':
                return year + '/' + this.add0(month) + '/' + this.add0(day);
            case 'yyyyMMdd':
                return year + this.add0(month) + this.add0(day);
        }
    }

    add0(num) {
        return num < 10 ? '0' + num : num;
    }
}
