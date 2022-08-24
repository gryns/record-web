interface A {
	show: boolean
	hidden: boolean
	status: string
}

interface B {
	show: boolean
	name: string
}

type outPut = Exclude<keyof A, keyof B>
