<template>
    <div>
        <label class="label" for="txtInput" v-if="label">
            {{ label }}
        </label>
        <input
                id="txtInput"
                type="text"
                class="TextInput"
                @input="$emit('input', $event.target.value)"
                v-bind="$attrs"
        />
    </div>
</template>

<script>
export default {
	name: 'TextInput',
    props: {
	  label: String
    }
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.label {
    display: block;
    margin-bottom: 5px;
}
.TextInput {
	border: 2px solid $blue-dark;
	line-height: inherit;
    outline: 0;
    padding: 10px 10px 10px 13px
}
.TextInput:focus {
    outline: 4px solid $blue-hover;
}
</style>
