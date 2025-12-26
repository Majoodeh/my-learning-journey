#Package.json

constinue later : link for that :[The Basics of Package.json](https://nodesource.com/blog/the-basics-of-package-json)

## What is it?
- it is the core to the Node.js
- fundamental part of understanding and working with Node.js , npm and JavaScript
- it is used as a manifest to store info about modules, packagess, dependencies, scripts, version and much more.

## Metadata inside package.json
 ### name property
  - - name of the module that package.json is describing.
 ### Version property
 - version of the module that package.json is describing.
 ### Licence property
  - type of licence that the module is licensed under.
 ### Description property
  - a string that conations human-readable description of the module.
  ### Keywords property
  - a collection of keywords that describe a module. (sth like tags)

## Functional Metadata
### Main property
  -entry point to the module.
  - when you use import or reuire to load modle, the module's exports from the file named in the main property will be returened to Node.js
## Repository property
 - array that defines where the source code for the module lives.
## Scripts property