# Dart

Welcome to DART! A VuePress theme that supports a light & dark themes, multiple colour schemes, and many other useful features. A modified version of [Reco](https://github.com/vuepress-reco/vuepress-theme-reco).  

## Changes you can use

### 404 messages

We've added custom 404 messages that you can mix with the default ones.

```javascript
module.exports = {
    themeConfig: {
        // Custom 404 messages, omit to keep the default messages.
        notFoundMessages: [ `Oops, I think you found a dead link.` ],
        // This will mix the notFoundMessages with the default messages
        mixNotFoundMessages: true
    }
};
``` 

### Page authors

Now you can have multiple authors with hyperlinks to another site or by default, their github.

```markdown
---
authors:
- User 
- [User]
- [Example User, https://github.com/User]
- [User, https://example.com]
---

# My markdown page
```

This is what will be shown for each.
1. [User](https://github.com/User) (https:\//github.com/User)
2. [User](https://github.com/User) (https:\//github.com/User)
2. [Example User](https://github.com/User) (https:\//github.com/User)
3. [User](https://example.com) (https:\//example.com)

## Changes to improve the visual aspect

### Tags

Tags will be separated with a comma, before it was separated with a space.

## Work in progress changes
Stay up to date https://trello.com/b/l4zH3Ne2/dart
