# This documentation is not actual

# UI Input docs
```html
<UIInput />
```

### Input "`prop:theme`"
```html
<UIInput theme="light" /> <-- Is default -->
<UIInput theme="dark" />
```

### Input `@change` handler
```html
<UIInput @change="change" :value="inputValue" />

<script setup lang="ts">
  const inputValue = ref("")

  function change(newValue: string) {
    inputValue.value = newValue
  }
</script>
```

### Input "`prop:disabled`"
```html
<UIInput :disabled="false" /> <-- Is default -->
<UIInput disabled />
```

### Input "`prop:readonly`"
```html
<UIInput :readonly="false" /> <-- Is default -->
<UIInput readonly />
```