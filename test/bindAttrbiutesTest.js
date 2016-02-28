describe('Bind attributes', function() {

  context('bindable', function() {

    beforeEach(function() {
      var div = document.createElement("div");
      div.id = "mock"
      div.innerHTML = "<b class='bindable' id='custom' data-bind='testValue'>default</b>";
      document.body.appendChild(div);
    });

    afterEach(function() {
      document.body.removeChild(document.getElementById("mock"));
    });

    it('Should bind value to B', function() {
      var b = document.getElementById("custom");
      Bindr.bindValues({
        testValue : "My value!"
      });

      expect(b.innerHTML).to.eql("My value!");
    });

    it('Should update value', function() {
      var b = document.getElementById("custom");
      Bindr.bindValues({
        testValue : "My value!"
      });

      expect(b.innerHTML).to.eql("My value!");
      Bindr.updateValue("testValue", "New Value");
      expect(b.innerHTML).to.eql("New Value");
    });

    it('Should bind variable to input field', function() {
      var div = document.getElementById("mock");
      div.innerHTML = "<input id='myText' class='bindable' data-input='name' type='text' value='Default'>";

      Bindr.bindValues({
        name : "Fred"
      });

      var input = document.getElementById("myText");
      expect(input.value).to.eql("Fred");
    });
  });
})
