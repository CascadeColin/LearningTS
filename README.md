# Source
See https://www.youtube.com/watch?v=30LWjhZzg50 to brush up on these topics

# key terms
`tsc` -> the command that calls the compiler (TypeScript Compiler)

# Setup new project

run `tsc --init`
this will create a `tsconfig.json` file that details tons of things that can be done with it
see TS docs for more information on these options
run `npm init -y` to create `package.json`
modify "useDir" in `tsconfig.json` to output transpiled code to `dist\`
using `tsc -w` creates a watch that updates the transpiled JS as the TS is worked on