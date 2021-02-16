import cookie from 'react-cookies';

 class CustomCookies {
  constructor(nameCattegoryCookies){
    this.name = nameCattegoryCookies;
    this.cookiesData = cookie.load(this.name);
    this.cookiesData =  this.cookiesData  === undefined ? [] : this.cookiesData ;
  }
  addNewElementToCookies(newElement) {
    cookie.save(this.name , [...this.cookiesData, newElement] );
  }
  clearCookies() {
    cookie.save(this.name, []);
  }
  getData() {
    return this.cookiesData;
  }
}

export default CustomCookies;
