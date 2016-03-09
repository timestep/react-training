# Modules

ES6 also introduces the concept of a module, which works in a similar way to other languages. Defining an ES6 module is quite easy: each file is assumed to define a module and we'll specify it's exported values using the export keyword.

```js
import Parse from 'parse';
import { myFunc } from './myModule';
import * as myModule from './myOtherModule';
```
