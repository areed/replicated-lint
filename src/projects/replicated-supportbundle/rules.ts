// THIS FILE IS AUTOGENERATED
// tslint:disable
export default [{"name":"spec-lifecycle-tip","type":"info","message":"Did you know you can create custom, interactive workflows and messaging for your end customer by defining a lifecycle?","links":["https://help.replicated.com/api/support-bundle-yaml-lifecycle/root"],"test":{"Falsey":{"path":"lifecycle"}},"examples":{"wrong":[{"description":"Spec has no `lifecycle`","yaml":"---\nspecs: []\nlifecycle:\n"},{"description":"Spec `lifecycle` is empty","yaml":"---\nspecs: []\nlifecycle: []\n"}],"right":[{"description":"Spec has a `lifecycle` specified","yaml":"---\nspecs: []\nlifecycle:\n  - message:\n      contents: generating bundle...\n  - generate: {}\n"}]}},{"name":"spec-specs-tip","type":"info","message":"By adding a `specs` section, you can customize what files and commands will be run to collect diagnostic information about your app.","links":["https://help.replicated.com/api/support-bundle-yaml-specs/shared"],"test":{"Falsey":{"path":"specs"}},"examples":{"wrong":[{"description":"Spec has no `specs`","yaml":"---\nlifecycle:\n  - message:\n      contents: \"Collecting...\"\n"},{"description":"Spec `specs` is empty","yaml":"---\nspecs: []\nlifecycle:\n  - message:\n      contents: \"Collecting...\"\n"}],"right":[{"description":"Spec has a `specs` specified","yaml":"---\nspecs:\n  - os.read-file:\n      filepath: \"/etc/hosts\"\n      output_dir: /etc/hosts\n"}]}}]