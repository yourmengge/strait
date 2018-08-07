export class DateFormat {
    formatDate(date: Date, type) {
        const year = date.getFullYear();
        const month = this.add0(date.getMonth() + 1);
        const day = this.add0(date.getDate());
        const hour = this.add0(date.getHours());
        const min = this.add0(date.getMinutes());
        const sceonds = this.add0(date.getSeconds());
        switch (type) {
            case 'yyyy/MM/dd':
                return year + '/' + month + '/' + day;
            case 'yyyyMMdd':
                return year + month + day;
            case 'hhmmss':
                return hour + min + sceonds;
        }
    }

    add0(num) {
        return num < 10 ? '0' + num : num + '';
    }
}
