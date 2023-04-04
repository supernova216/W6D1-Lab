const {
    returnTwo,
    greeting,
    add
} = require('./functions')


test('returnTwo should equal 2',()=>{
    expect(returnTwo()).toEqual(2)
})


describe('groups of tests for greeting function',()=>{

test(`greeting('James') should equal "Hello, James"`,()=>{
    expect(greeting('James')).toBe(`Hello, James.`)
})

test(`greeting('James') should equal "Hello, James"`,()=>{
    expect(greeting('Jill')).toBe(`Hello, Jill.`)
})
})

describe('group of tests for add function',()=>{

    test('add(1,2) should equal 3',()=>{
        expect(add(1,2)).toBe(3)
    })

    test('add(5,9) should equal 14',()=>{
        expect(add(5,9)).toBe(14)
    })
})