# Instagram Asset Generator

An API to generate different assets that we can use to share on Instagram.

## Parameters

### Chef

`cover`: chef image (featured image)

`picture`: chef thumbnail (small image)

`title`: name (e.g.: Marcelo Tanus, Metzi, etc).

`subtitle`: description (e.g.: Chef, Sous-chef, Mixologist, Bartender, etc).


```
/chef?title=NAME&subtitle=PLACEHOLDER&cover=URL&picture=URL
```

[Example](https://instagram-asset-generator.herokuapp.com/chef?title=NAME&subtitle=PLACEHOLDER&cover=https://place-puppy.com/1280x1280&picture=https://place-puppy.com/300x300)

---

### Featured Chef

`cover1`: recipe image (featured image)

`cover2`: recipe image 

`cover3`: recipe image 

`picture`: chef thumbnail (small image)

`title`: name (e.g.: Marcelo Tanus, Metzi, etc).

`subtitle`: description (e.g.: Chef, Sous-chef, Mixologist, Bartender, etc).


```
/featured?title=NAME&subtitle=PLACEHOLDER&picture=URL&cover1=URL&cover2=URL&&cover3=URL
```

[Example](https://instagram-asset-generator.herokuapp.com/featured?title=NAME&subtitle=PLACEHOLDER&picture=https://place-puppy.com/300x300&cover1=https://place-puppy.com/300x300&cover2=https://place-puppy.com/300x300&&cover3=https://place-puppy.com/300x300)

---


### Recipe

`cover`: recipe image (featured image)

`picture`: chef thumbnail (small image)

`title`: recipe name (e.g.: Croque Madame, Quelites, etc).

`subtitle`: chef's name (e.g.: Marcelo Tanus, Metzi, etc).


```
/recipe?title=NAME&subtitle=PLACEHOLDER&cover=URL&picture=URL
```

[Example](https://instagram-asset-generator.herokuapp.com/recipe?title=NAME&subtitle=PLACEHOLDER&cover=https://place-puppy.com/600x600&picture=https://place-puppy.com/300x300)


---

### Result of a cooked recipe

`cover`: recipe image (featured image)

`picture`: chef thumbnail (small image)

`pictureUser`: user thumbnail

`title`: recipe name (e.g.: Croque Madame, Quelites, etc).

`subtitle`: chef's name (e.g.: Marcelo Tanus, Metzi, etc).

`user`: user's name


```
/cooked?title=NAME&subtitle=PLACEHOLDER&cover=URL&picture=URL&user=PLACEHOLDER&pictureUser=URL
```

[Example](https://instagram-asset-generator.herokuapp.com/cooked?title=NAME&subtitle=PLACEHOLDER&cover=https://place-puppy.com/600x600&picture=https://place-puppy.com/600x600&user=PLACEHOLDER&pictureUser=https://place-puppy.com/600x600)