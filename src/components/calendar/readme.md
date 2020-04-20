# hc-calendar



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default                       |
| ----------- | ----------- | ----------- | --------- | ----------------------------- |
| `choice`    | `choice`    |             | `number`  | `0`                           |
| `day`       | `day`       |             | `number`  | `(new Date()).getDate()`      |
| `end`       | `end`       |             | `string`  | `undefined`                   |
| `gesture`   | `gesture`   |             | `boolean` | `false`                       |
| `lunar`     | `lunar`     |             | `boolean` | `false`                       |
| `month`     | `month`     |             | `number`  | `(new Date()).getMonth() + 1` |
| `start`     | `start`     |             | `string`  | `undefined`                   |
| `type`      | `type`      |             | `string`  | `'month'`                     |
| `vshape`    | `vshape`    |             | `boolean` | `false`                       |
| `watermark` | `watermark` |             | `boolean` | `true`                        |
| `week`      | `week`      |             | `number`  | `undefined`                   |
| `weekday`   | `weekday`   |             | `number`  | `undefined`                   |
| `year`      | `year`      |             | `number`  | `(new Date()).getFullYear()`  |


## Methods

### `init(option: any) => Promise<HTMLHcCalendarElement>`



#### Returns

Type: `Promise<HTMLHcCalendarElement>`




## Dependencies

### Used by

 - [hc-calendar]()

### Depends on

- [hc-icon](../icon)
- [hc-calendar]()
- [hc-drawer](../drawer)

### Graph
```mermaid
graph TD;
  hc-calendar --> hc-calendar
  style hc-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with swimly!*
