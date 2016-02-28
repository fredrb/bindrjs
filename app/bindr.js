var Bindr = {

  _getAllBindableElement : function() {
    return document.getElementsByClassName("bindable");
  },

  _find : function(property) {
    var bindableElements =  this._getAllBindableElement();
    var elem = 0;
    for(elem; elem < bindableElements.length; elem++) {
      if (bindableElements[elem].attributes.hasOwnProperty('data-bind')) {
        if (bindableElements[elem].attributes['data-bind'].value == property)
          return { elem: bindableElements[elem], type: 'bind' };
      } else if (bindableElements[elem].attributes.hasOwnProperty('data-input')) {
        if (bindableElements[elem].attributes['data-input'].value == property)
          return { elem: bindableElements[elem], type: 'input' };
      };
    }
  },

  _applyValue : function(element, value) {
    switch (element.type) {
      case 'bind':
        element.elem.innerHTML = value;
        break;
      case 'input':
        element.elem.value = value;
        break;
      default:
        throw new Error("Tag property not found");
    }
  },

  bindValues : function(map) {
    for(var key in map) {
      this._applyValue(this._find(key), map[key]);
    }
  },

  updateValue : function(key, value) {
    this._applyValue(this._find(key), value);
  }

}
