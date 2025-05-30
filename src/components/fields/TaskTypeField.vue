<!--
  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<component :is="component"
		class="field"
		:field-key="fieldKey"
		:value="value"
		:field="field"
		:options="options ?? undefined"
		:is-output="isOutput"
		@submit="$emit('submit', $event)"
		@update:value="$emit('update:value', $event)" />
</template>

<script>
import TextField from './TextField.vue'
import NumberField from './NumberField.vue'
import SmallNumberField from './SmallNumberField.vue'
import MediaField from './MediaField.vue'
import EnumField from './EnumField.vue'
import ListOfMediaField from './ListOfMediaField.vue'
import ListOfTextsField from './ListOfTextsField.vue'

import { SHAPE_TYPE_NAMES } from '../../constants.js'

export default {
	name: 'TaskTypeField',

	components: {
	},

	props: {
		fieldKey: {
			type: String,
			required: true,
		},
		value: {
			type: [Object, Array, String, Number, null],
			default: null,
		},
		field: {
			type: Object,
			required: true,
		},
		options: {
			type: [Array, null],
			default: null,
		},
		isOutput: {
			type: Boolean,
			required: true,
		},
		defaults: {
			type: [Object, Array, null],
			default: null,
		},
	},

	emits: [
		'submit',
		'update:value',
	],

	data() {
		return {
		}
	},

	computed: {
		isListOfMedia() {
			return [
				SHAPE_TYPE_NAMES.ListOfAudios,
				SHAPE_TYPE_NAMES.ListOfImages,
				SHAPE_TYPE_NAMES.ListOfVideos,
				SHAPE_TYPE_NAMES.ListOfFiles,
			].includes(this.field.type)
		},
		isMedia() {
			return [
				SHAPE_TYPE_NAMES.Audio,
				SHAPE_TYPE_NAMES.Image,
				SHAPE_TYPE_NAMES.Video,
				SHAPE_TYPE_NAMES.File,
			].includes(this.field.type)
		},
		isSmallNumberField() {
			if (this.field.type !== SHAPE_TYPE_NAMES.Number) {
				return false
			}
			return (this.defaults && this.defaults[this.fieldKey] && parseInt(this.defaults[this.fieldKey]) < 10)
		},
		component() {
			if (this.field.type === SHAPE_TYPE_NAMES.Text) {
				return TextField
			} else if (this.field.type === SHAPE_TYPE_NAMES.Number) {
				return this.isSmallNumberField ? SmallNumberField : NumberField
			} else if (this.isMedia) {
				return MediaField
			} else if (this.isListOfMedia) {
				return ListOfMediaField
			} else if (this.field.type === SHAPE_TYPE_NAMES.ListOfTexts) {
				return ListOfTextsField
			} else if (this.field.type === SHAPE_TYPE_NAMES.Enum) {
				return EnumField
			}
			return TextField
		},
	},

	watch: {
	},

	mounted() {
	},

	methods: {
	},
}
</script>

<style lang="scss">
.field {
	width: 100%;
}
</style>
