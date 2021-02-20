# VuePress Theme Reco Edit

Just some simple edits done by the MenuDocs team to add a couple features and alter some chinese to english.

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
stay up to date https://trello.com/b/l4zH3Ne2/menudocs-written-guide

- [x] Remove Auto or actually make it work.
- [x] Accent colours.
- [ ] Stripping Unnecessary code back.
- [ ] Removal of loading pacman.
- [ ] Improve Colours on Categories and Tags.
- [ ] Fix the broken tags system
