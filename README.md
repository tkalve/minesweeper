# minesweeper
Dashboard widget for the Sanity Content Studio which gives you a minesweeper game.
The game itself was stolen from [@saninmersion](https://github.com/saninmersion/react-minesweeper)
and adapted a bit. I plan to implement a level select feature or fluid rows/columns
depending on available space

## Usage
Assuming you already have a functional Dashboard in your Sanity Content Studio.

1. Install this widget in your Studio folder like so:

```
sanity install minesweeper
```

2. Update your `src/dashboardConfig.js` file by adding `{name: 'minesweeper'}` to the `widgets` array
3. Restart your Studio