# -*- coding: utf-8 -*-
import WebElements.All as WebElements

sharedFilesRoot = "/home/timothy/Applications/GuiBuilder/static/"
indent = " "

WebElements.Fields.Factory.products.pop('field', None)
sections = ({'Name':'Layout',
             'Factory':WebElements.Layout.Factory,
             'Icon':'icons/sections/layout.png'},
            {'Name':'Document',
             'Factory':WebElements.Document.Factory,
             'Icon':'icons/sections/document.png'},
            {'Name':'Display',
             'Factory':WebElements.Display.Factory,
             'Icon':'icons/sections/display.png'},
            {'Name':'Buttons',
             'Factory':WebElements.Buttons.Factory,
             'Icon':'icons/sections/buttons.png'},
            {'Name':'Fields',
             'Factory':WebElements.Fields.Factory,
             'Icon':'icons/sections/fields.png'},
            {'Name':'Inputs',
             'Factory':WebElements.Inputs.Factory,
             'Icon':'icons/sections/inputs.png'},
            {'Name':'HiddenInputs',
             'Factory':WebElements.HiddenInputs.Factory,
             'Icon':'icons/sections/hiddeninputs.png'},
            {'Name':'Navigation',
             'Factory':WebElements.Navigation.Factory,
             'Icon':'icons/sections/navigation.png'},
            {'Name':'Resources',
             'Factory':WebElements.Resources.Factory,
             'Icon':'icons/sections/resources.png'},
            {'Name':'Containers',
             'Factory':WebElements.Containers.Factory,
             'Icon':'icons/sections/containers.png'},
            {'Name':'DataViews',
             'Factory':WebElements.DataViews.Factory,
             'Icon':'icons/sections/dataviews.png'},
            {'Name':'Charts',
             'Factory':WebElements.Charts.Factory,
             'Icon':'icons/sections/dataviews.png'},
            {'Name':'Printing',
             'Factory':WebElements.Printing.Factory,
             'Icon':'icons/sections/printing.png'},
           )

factories = [WebElements.Factory]

javascriptFiles = ['js/prototype.js',
                   'js/prototypeUtils.js',
                   'js/JavascriptUtils.js']

cssFiles = ['stylesheets/WebElements.css',
            'stylesheets/HoneyDoes.css']

Factory = WebElements.FactoryClasses.Composite(factories)
WebElements.Display.Factory.addProduct(WebElements.Base.Invalid)