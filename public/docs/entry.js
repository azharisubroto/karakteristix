import 'bootstrap/dist/css/bootstrap-grid.min.css'

    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../../better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../../src/utils/wrapper-components.js';

      window._CustomWrapper = _CustomWrapper;

      import Component0 from '../../src/components/Button.jsx';
reactComponents['Button'] = Component0;

import Component1 from '../../src/components/Card.jsx';
reactComponents['Card'] = Component1;