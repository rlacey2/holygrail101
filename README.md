# holygrail101 / A101HgStyle2a

[demo](https://holygrail101.herokuapp.com)

The Holy Grail refers to a web page layout that has multiple, equal-height columns that are defined with style sheets. It is commonly desired and implemented, although the ways in which it can be implemented with current technologies all have drawbacks. Because of this, finding an optimal implementation has been likened to searching for the elusive Holy Grail.

The approach here is to try and produce a response application for mobile to desktop using <b>flex</b>. The primary intended target device is desktop-level, with the bonus of availability on a small device (<768px)

1. Includes a global application header and footer with a component level

main body.

2. The component level which fills the main body is essentially the holy

grail, 3 columns of equal height.

3. Each component has its own header, footer and 3

equal length columns: a left side, main central content body for the component and a right side.

4. The design is responsive to xs device size.

5. The header and asides are intended to hold functional navigation/action/features relative to the global or component view - developer business logic.

6. Uses bootstrap 4.

A lot of the heavy lifting is done here, further styling is left as an

exercise for the reader/user to adjust the position of relevant header/footer items.

## Development server

  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

  
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.