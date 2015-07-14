$(function() {

Parse.$ = jQuery;

Parse.initialize("CXMg53ZPlWibr2kJXwzqEu0eLgXNnJ30YSvJYaR7", "u7Dt5xt2bmuqMTRYpCev8Ct4nWrBbfpVUupdUcww");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

});