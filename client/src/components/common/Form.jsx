import { inputTypes } from "@/utils";
import {
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectItem } from "../ui/select";
import { Textarea } from "../ui/textarea";

const Form = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  const renderInputs = (controlItem) => {
    let element = null;
    const { name, placeholder, type, componentType } = controlItem;
    console.log(controlItem);
    const value = formData[name];
    switch (componentType) {
      case inputTypes.INPUT:
        element = (
          <Input
            value={value}
            name={name}
            placeholder={placeholder}
            id={name}
            type={type}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        );
        break;
      case inputTypes.SELECT:
        element = (
          <Select
            value={value}
            onValueChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem.options && controlItem?.options.length > 0
                ? controlItem.options.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case inputTypes.TEXTAREA:
        element = (
          <Textarea
            value={value}
            name={name}
            placeholder={placeholder}
            id={name}
            onChange={(e) =>
              setFormData({ ...formData, [name]: e.target.value })
            }
          />
        );
        break;
      default:
        element = (
          <Input
            value={value}
            name={name}
            placeholder={placeholder}
            id={name}
            type={type}
            onChange={(e) =>
              setFormData({ ...formData, [name]: e.target.value })
            }
          />
        );
        break;
    }
    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((cI) => (
          <div className="grip w-full gap-1.5" key={cI.name}>
            <label className="mb-1">{cI.label}</label>
            {renderInputs(cI)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default Form;
