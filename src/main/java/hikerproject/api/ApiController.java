package hikerproject.api;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class ApiController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/api/{location}/{difficulty}/{miles}")
	public Api api(@PathVariable String location, @PathVariable String difficulty, @PathVariable int miles) {
        return new Api(location, difficulty, miles);
	}
}