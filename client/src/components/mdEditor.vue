<template>
  <v-md-editor height="1200px" right-toolbar="preview toc sync-scroll"
               v-model="text"
               :codemirrorConfig="codemirrorConfig"></v-md-editor>
</template>

<script lang="ts" setup>
import VMdEditor from '@cpaanalytics/v-md-editor/lib/codemirror-editor';
import {ref} from 'vue';

const text = 'text'
const codemirrorConfig = {
  hintOptions: {
    hint: async (ctx: any) => {
      const cursor = ctx.getCursor();
      const tokens = ctx.getValue().split('\n');

      const completions = ['abc', 'def'];

      return {
        list: completions,
        from: cursor,
        to: cursor
      };
    },
    completeSingle: false,
    alignWithWord: true
  },
  extraKeys: {
    'Ctrl-Space': 'autocomplete'
  }
};

</script>







