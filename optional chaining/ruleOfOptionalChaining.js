/*Don’t overuse the optional chaining
We should use?.only where it’s ok that something doesn’t exist.

For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

    Then, if user happens to be undefined, we’ll see a programming error about it and fix it.Otherwise, if we overuse?., coding errors can be silenced where not appropriate, and become more difficult to debug.
    
    
The variable before ?. must be declared
If there’s no variable user at all, then user?.anything triggers an error:
obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.*/