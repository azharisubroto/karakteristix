import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../src/styles/globals.scss'

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

import Component2 from '../../src/components/ChartCard.jsx';
reactComponents['ChartCard'] = Component2;

import Component3 from '../../src/components/FormHead.jsx';
reactComponents['FormHead'] = Component3;

import Component4 from '../../src/components/LoginForm.jsx';
reactComponents['LoginForm'] = Component4;

import Component5 from '../../src/components/PageTitle.jsx';
reactComponents['PageTitle'] = Component5;