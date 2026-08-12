import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <Card className="w-full bg-background">
      <CardContent>
        <form>
          <FieldGroup className="gap-4">
            <Field className="grid grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="Your full name" />
              </Field>

              <Field>
                <FieldLabel htmlFor="company">Company</FieldLabel>
                <Input id="company" placeholder="Organization name" />
              </Field>
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Work Email</FieldLabel>
              <Input id="email" type="email" placeholder="name@company.com" />
            </Field>

            <Field>
              <FieldLabel htmlFor="question">What do you need?</FieldLabel>

              <Textarea
                className="min-h-32"
                id="question"
                placeholder="Describe your question"
              />
            </Field>

            <Field>
              <Button className="py-5">Submit</Button>
              <FieldDescription className="text-xs text-center">
                Replies within one day business day. Don&apos;t spam!
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
