# effector-react-usestatemap-bug

Demo: https://mazhuravlev.github.io/effector-react-usestatemap-bug/

1. Open Devtools console
1. Click "fire Second event", Test component will update. It is subscribed with 'useStoreMap'.
1. Unmount Test component with 'Toggle' button.
1. Click "fire Second event", warning will be displayed in console: 'Warning: Can't perform a React state update on an unmounted component.'
