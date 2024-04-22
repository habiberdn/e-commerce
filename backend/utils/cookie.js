class Cookie {
    constructor(name,value,option){
        this.name = name 
        this.value = value
        this.option = option
    }
    Cookie(){
        if (!this.value){
            return new Error("Cookie's value required!")
        }
        this.option.expires = new Date(Date.now() + this.option.expires)
        // let opts = merge({}, this.option);
        return this
    }

}

module.exports = Cookie