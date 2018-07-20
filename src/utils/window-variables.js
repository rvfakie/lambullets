export const initWindowVariables = () => {
  
  String.prototype._transliterate = function() {
    const rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g);
    const eng = "shh sh ch cz yu ya yo zh yi y je a b v g d e z i j k l m n o p r s t u f x j".split(/ +/g);

    let str = this;
    for(var x = 0; x < rus.length; x++) {
      str = str.split(rus[x]).join(eng[x]).split(' ').join('_');
    }
    return str;
  }
  
}