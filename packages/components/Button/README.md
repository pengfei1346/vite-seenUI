---
title: Button
description: Button component doc
tags:
  - "components"
---

# Button

This is Button component

## Install

```js
# use npm
import ui from "@seen-ui/button";

createApp(App).use(ui);
```

## Basic

```vue demo
<template>
  <s-button>default</s-button>
  <s-button type="primary">primary</s-button>
  <s-button type="success">success</s-button>
  <s-button type="info">info</s-button>
  <s-button type="warning">warning</s-button>
  <s-button type="danger">danger</s-button>
</template>
```

## Different Size

```vue demo
<template>
  <s-button type="success">default</s-button>
  <s-button type="success" size="small">small</s-button>
  <s-button type="success" size="large">large</s-button>
</template>
```
