<template>
  <div class="w-full" min-h-screen flex items-center>
    <div class="max-w-[800px] w-full mx-auto">
      <Card>
        <CardTitle>
          <h1 class="text-center py-4">Welcome</h1>
        </CardTitle>
        <CardContent>
          <Auth
            :supabaseClient="supabaseClient"
            :appearance="{
              theme: ThemeSupa,
            }"
            :providers="['github', 'google']"
            redirectTo="/"
          />
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";

const supabaseClient = useSupabaseClient();

definePageMeta({
  layouts: "home",
});
</script>
