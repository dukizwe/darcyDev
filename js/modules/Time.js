export default class Time {
    diffTime(oldDate) {
        oldDate = new Date(oldDate).getTime()
        const today = new Date().getTime()
        return new Number((today - oldDate) / 31536000000).toFixed(0)
    }
    get carrierYear() {
        return this.diffTime("1 September 2017")
    }
    get age() {
        return this.diffTime("29 August 2000")
    }
    get schoolYear() {
        return this.diffTime("1 September 2019")
    }
}