<template>
    <div class="TextInput">
        <label class="label" for="txtInput" v-if="label">
            {{ label }}
        </label>
        <input
            id="txtInput"
            type="text"
            v-on="{
                ...$listeners,
                input: event => $emit('input', event.target.value)
            }"
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
    input {
        min-height: 44px;
        border: 2px solid $blue-dark;
        line-height: inherit;
        outline: 0;
        padding: 10px 10px 10px 13px;

        font-size: 18pt;
        font-weight: 300;
    }
    input:focus {
        outline: 4px solid $blue-hover;
    }
}
</style>
