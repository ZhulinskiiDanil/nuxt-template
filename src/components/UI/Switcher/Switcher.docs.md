# This documentation is not actual

# UI Switcher docs
```html
<UISwitcher />
```

### Switcher "`prop:theme`"
```html
<UISwitcher theme="light" /> <-- Is default -->
<UISwitcher theme="dark" />
```

### Switcher `@change` handler
```html
<UISwitcher @change="change" />

<script setup lang="ts">
  function change(checked: boolean) {
    console.log(checked) // Current status after change
  }
</script>
```
### Switcher "`prop:disabled`"
```html
<UISwitcher disabled />
```
#### Now you can't click on it

### Switcher "`prop:palindrome`"
```html
<-- Looks active in different positions -->
<UISwitcher palindrome />
```

### Switcher with icon
```html
<UISwitcher>
  <template v-slot:icon>
    <svg>
      </>
    </svg>
  </template>
</UISwitcher>
```